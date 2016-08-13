class UsersController < ApplicationController
  def create
    User.create(
      name: session[:name],
      time: params[:time]
    )
    redirect_to root_path
  end

  def store_user
    # so user can stay on same page and reuse session name
    session[:name] = user_params[:name]
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end
end
