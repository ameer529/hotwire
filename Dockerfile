FROM ruby:3.2.8-slim

# Install essential packages
RUN apt-get update -qq && \
    apt-get install -y build-essential libyaml-dev libpq-dev nodejs yarn

# Set working directory
WORKDIR /app

# Install gems
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy the rest of the app
COPY . .

# Precompile assets (optional for dev)
# RUN bundle exec rails assets:precompile

EXPOSE 3000

CMD ["bin/rails", "server", "-b", "0.0.0.0"]
