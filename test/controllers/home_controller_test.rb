require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    TestRecords.make!(Gif)
    get root_url

    assert_response :success

    gifs = assigns(:gifs).to_a
    assert_equal gifs, [Gif.last]
    assert_equal gifs.count, 1
  end
end
