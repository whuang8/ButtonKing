class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    User.create(
      name: params[:user][:name]
    )
    redirect_to new_user_path
  end
end
