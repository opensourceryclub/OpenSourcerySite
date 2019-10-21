require 'test_helper'

class Guild::DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get guild_dashboard_index_url
    assert_response :success
  end

  test "should get dash" do
    get guild_dashboard_dash_url
    assert_response :success
  end

  test "should get signin" do
    get guild_dashboard_signin_url
    assert_response :success
  end

  test "should get signup" do
    get guild_dashboard_signup_url
    assert_response :success
  end

  test "should get signout" do
    get guild_dashboard_signout_url
    assert_response :success
  end

end
