class Ability
  include CanCan::Ability

  def initialize(user)
    if user.admin
      can :manage,:all
    else
      can :create,Bid
    end
  end
end
