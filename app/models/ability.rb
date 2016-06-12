class Ability
  include CanCan::Ability

  def initialize(user)
    if user.admin?
      can :manage,:all
    else
      
      can :update,Product do |product|
        product.seller == user
      end
      can :destroy,Product do |product|
        product.seller == user
      end

      can :create,Product
      can :create,Bid
    end
  end
end
