source ./scripts/.env

bucket_url="s3://$BLOG_BUCKET"

aws s3 sync ./public "s3://$BLOG_BUCKET" --profile clay

