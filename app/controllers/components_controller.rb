class ComponentsController < ApplicationController
  def index
    index_path = Rails.root.join('app/views/components/index.json')

    unless File.exist?(index_path)
      render json: { error: 'Component index not found' }, status: :not_found and return
    end

    render json: JSON.parse(File.read(index_path))
  end

  def show
    name = params[:name].underscore
    begin
      render "components/#{name}", layout: false
    rescue ActionView::MissingTemplate
      render plain: "Component not found", status: :not_found
    end
  end
end
