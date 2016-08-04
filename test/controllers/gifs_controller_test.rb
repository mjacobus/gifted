require 'test_helper'

class GifsControllerTest < ActionDispatch::IntegrationTest
  def new_record
    TestRecords.make(Gif)
  end

  def new_record!
    TestRecords.make!(Gif)
  end

  test "should get index" do
    get gifs_url

    assert_response :success
  end

  test "should get new" do
    get new_gif_url

    assert_response :success
  end

  test "should create gif" do
    @gif = new_record

    assert_difference('Gif.count') do
      @gif = new_record
      post gifs_url, params: { gif: { email: @gif.email, name: @gif.name, title: @gif.title, url: @gif.url } }
    end

    assert_redirected_to gif_url(Gif.last)
  end

  test "should show gif" do
    @gif = new_record!

    get gif_url(@gif)

    assert_response :success
  end

  test "should get edit" do
    @gif = new_record!

    get edit_gif_url(@gif)

    assert_response :success
  end

  test "should update gif" do
    @gif = new_record!

    patch gif_url(@gif), params: { gif: { email: @gif.email, name: @gif.name, title: @gif.title, url: @gif.url } }

    assert_redirected_to gif_url(@gif)
  end

  test "should destroy gif" do
    @gif = new_record!

    assert_difference('Gif.count', -1) do
      delete gif_url(@gif)
    end

    assert_redirected_to gifs_url
  end
end
