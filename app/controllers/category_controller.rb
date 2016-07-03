class CategoryController < ApplicationController
  def index
    @categories = Category.all
    respond_to do |format|
      format.html
      format.xlsx{
        response.headers['Content-Disposition'] = 'attachment; filename="Categories with products.xlsx"'
      }
    end
  end
end
