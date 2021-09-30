#!/usr/bin/env bash

echo "Creating .env file"
cat > ./.env <<EOL
REACT_API_URL=${REACT_API_URL}
REACT_CLIENT_ID=${REACT_CLIENT_ID}
REACT_APP_TYPE=${REACT_APP_TYPE}
EOL