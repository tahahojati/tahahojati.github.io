wget --output-document=src/assets/resume.pdf https://github.com/tahahojati/myCV/raw/master/Main/resume.pdf
call npm run build
powershell "aws s3 sync dist/ s3://www.tpourjalali.com/dist/ --acl public-read"
powershell "aws s3 sync styles/ s3://www.tpourjalali.com/styles/ --acl public-read"
powershell "aws s3 cp index.html s3://www.tpourjalali.com --acl public-read"
powershell "aws s3 cp node_modules/bootstrap s3://www.tpourjalali.com/node_modules/bootstrap --recursive --acl public-read"
powershell "aws s3 cp node_modules/font-awesome s3://www.tpourjalali.com/node_modules/font-awesome --recursive --acl public-read" 
