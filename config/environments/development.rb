Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.
  config.after_initialize do
    ActiveMerchant::Billing::Base.mode = :test
    paypal_options = {
      :login => "ssebandeke_api1.example.com",
    	:password => "2WP9P5AA6SFERZGV",
    	:signature => "An5ns1Kso7MWUdW4ErQKJJJ4qi4-ATqBgeg51mZw28dPu8o3qeOwBV.u"
    }
    ::STANDARD_GATEWAY = ActiveMerchant::Billing::PaypalGateway.new(paypal_options)
  ::EXPRESS_GATEWAY = ActiveMerchant::Billing::PaypalExpressGateway.new(paypal_options)

  end
  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true

  # Asset digests allow you to set far-future HTTP expiration dates on all assets,
  # yet still be able to expire them through the digest params.
  config.assets.digest = true

  # Adds additional error checking when serving assets at runtime.
  # Checks for improperly declared sprockets dependencies.
  # Raises helpful error messages.
  config.assets.raise_runtime_errors = true
  # config.action_mailer.default_url_options = { host: 'localhost', port: 3000}
  config.action_mailer.delivery_method = :smtp
  # config.action_mailer.smtp_settings = {
  #     address: "smtp.gmail.com",
  #     port: 587,
  #     domain:"lawrence.com",
  #     authentication: "plain",
  #     enable_starttls_auto: true,
  #     user_name: ENV["GMAIL_USERNAME"],
  #     password:  ENV["GMAIL_PASSWORD"]
  # }
  config.action_mailer.default_url_options = { host: 'localhost:3000'}
  # config.stripe.secret_key = 'sk_test_quNXHTTU8jhGhYMr35PQvQlq'
  # config.stripe.publishable_key = ' pk_test_pJZwPSps0bDJ7o594v3IX779'
  # config.stripe.eager_load = ['user']
  # Raises error for missing translations
  # config.action_view.raise_on_missing_translations = true
end
