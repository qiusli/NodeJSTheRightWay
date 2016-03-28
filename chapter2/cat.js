/**
 * Created by qiushili on 3/10/16.
 */
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);