class HomeController < ApplicationController
  def index
    @gifs = Gif.all
  end
end
