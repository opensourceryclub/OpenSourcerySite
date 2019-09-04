class ApplicationController < ActionController::Base
	def error
		status_code = params[:code] || 500
		render "application/#{status_code.to_s}", status: status_code
	end
end
