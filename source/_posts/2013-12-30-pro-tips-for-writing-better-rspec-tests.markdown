---
layout: post
title: "Pro tips for writing better rspec tests"
date: 2013-12-30 15:42
comments: true
categories: rspec
---

Writing ‘good code’ is always a challenge for every project. Unfortunately, we always associate it with development and not tests. What about automation test code? Ever notice that you have write more automation code than the actual lines of development code?

Improper automation code leads to slow running specs, huge LOC in your spec files and a whole lot of confusion when you open a spec file. So, how does one avoid these problems?

Here are a few guidelines:

Tip #1: Follow 
<a title="Rspec-style" href="https://github.com/howaboutwe/rspec-style-guide">Rspec style</a>

Tip #2: Independent tests

We could use the word idempotent here but as a thumb rule there should not be any dependencies across specs and if we run the test multiple times in succession, it should give the same result So, it’s very important that every spec  run in clean database environment. Use <a href="https://github.com/bmabey/database_cleaner">database cleaner</a>  gem properly, so that you don’t end of having to seed the database before each test! So, if you don’t want roles and countries being deleted,

config.before(:suite) do
  DatabaseCleaner.strategy = :truncation, {:except => %w[roles countries]}
end

<!--more -->

Tip #3: Use expect and not should syntax

It’s just nice and clean!  Use the Transpec gem helps you to convert from should syntax to expect syntax

expect(User.all.count).to eq(1)
instead of

User.all.count.should == 1

Tip#4: Use the new syntax for object creation

Use the new FactoryGirl syntax that is supported in factory_girl4. This helps the code be clean of any harsh gem dependent syntax of class names!

create(:user)
instead of

FactoryGirl.create(:user)

Tip #5: Use let variables instead of instance variables

This makes code look cleaner. For better understanding about let read the answer given by Myron. Here is an example

describe Project do
  let(:project) { build(:project) }
 
  it "project should be valid" do
    expect(project.valid?).to eq(true)
  end
end
Now, when the example executes it defines a method called project if its not defined already or simply returns the value. Fast and efficient.

Tip #6: Use correct expectations for a spec

Obvious as it seems – the test we write should test the write stuff – not just make the test pass! Here is an example of making a test case pass.

context "#edit" do
  it "user should be able to edit his profile" do
    get :edit, id: user.id
    expect(response).to be_success
  end
end
So, your expectation should ideally be

describe UsersController do
  context "#edit" do
    #render_views
    it "user should be able to edit his profile" do
      get :edit, id: user.id
      expect(response).to render_template("edit")
    end
  end
end
Here #edit is a method defined in UsersController. So I defined a context in my specs.

Do remember that by default all controller specs stub the template rendering unless and until you include render_views

Tip #7: Use shared examples.

When you want to test the same functionality across different subjects, for example different kinds of users, use shared examples.

context "#edit" do
  it "admin should be able to edit his profile"
  it "distributor should be able to edit his profile"
end
You can write as

context "#edit" do
  shared_examples "profile_editing" do
    it "user should be able to edit his profile"
  end
 
  context "admin" do
    include_examples "profile_editing"
    it "should be able see to list of distributors"
  end
 
  context "distributor" do
    include_examples "profile_editing"
    it "should not able to see list of distributors"
  end
end
A word of caution – you may lost readability if you use too many shared examples in single file.

Tip #8: Use conditional hooks

Sometimes if you want to execute some piece of code only for one example but not for all examples in a context then you can use conditional hooks.


context "#update" do
  before(:each, run: true) do
    # do something
  end
 
  it "example1", run: :true
  it "example2"
end
Now before(:each) will run only for first example but not for second example.

Tip #9: Profiling your examples

rspec gives you an option to examine how much time does a example group take to run.  Simply run specs with the –profile flag.

rspec ./spec/models/user_spec.rb:51 --profile
# output:
0.22431 seconds ./spec/models/user_spec.rb:51
Tip #10: Tagging

When you have a large test suite and you changed some code, how do you ensure that your change didn’t breaks existing functionality? One way is to run your specs locally then push then your Continuous Integration server that runs all specs. This is time consuming if you want to test only a specific set of tests.

Tag them! Run your module specified specs by using tags. For example, suppose we have a Commission feature and we written model specs, controller specs and integration specs for it. We can easily tag each file with commission:true.  So when we change something related to commissions,  we can run only commission related specs!. We can tag our scenarios as below

# spec/models/commission_spec.rb
describe Commission, commission: true do
  # do something
end
rspec –tag commission
Note: We can tag entire context or a single example in the spec file. For more information please follow this link

All these tips are a results of practical problems I have faced and overcome and a result of finding out the best we can do our own testing. More suggestions and tips are welcome!

