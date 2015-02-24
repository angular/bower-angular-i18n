# precommit script for assembling CommonJS compatible modules
# allows require('angular-i18n'/aa) === 'ngLocale'
# run by angular.js build script

# delete all js files that don't begin with angular-
# ensures that removed locales have their CJS file removed
find . -maxdepth 1 -not -name 'angular-*.js' -name '*.js' -delete
for file in angular-locale_*.js
do
  newFile=${file//angular-locale_/}
  require=${file%.js}
  echo "-- adding CommonJS exports file: $newFile"
  echo "require('./$require');" > $newFile
  echo "module.exports = 'ngLocale';" >> $newFile
done
