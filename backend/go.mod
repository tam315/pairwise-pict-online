module example.com/m/v2

go 1.13

require (
	github.com/gin-contrib/cors v1.3.0
	github.com/gin-contrib/gzip v0.0.1
	github.com/gin-gonic/gin v1.4.0
	github.com/stretchr/testify v1.3.0
)

// to fix import error
// https://github.com/gin-gonic/gin/issues/1673#issuecomment-482023570
replace github.com/ugorji/go v1.1.4 => github.com/ugorji/go/codec v0.0.0-20190204201341-e444a5086c43
