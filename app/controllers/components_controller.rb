class ComponentsController < ApplicationController
    def index
      components_path = Rails.root.join("app/views/components")
      
      partials = Dir.glob("#{components_path}/_*.html.erb")
                    .map { |file| File.basename(file).sub(/^_/, "").sub(/\.html\.erb$/, "") }
  
      render json: partials
    end
  
    def show
      name = params[:name].underscore
  
      begin
        render partial: "components/#{name}", layout: false
      rescue ActionView::MissingTemplate => e
        puts "❌ Missing template: #{e.message}"
        render plain: "Component not found", status: :not_found
      end
    end
  end
  