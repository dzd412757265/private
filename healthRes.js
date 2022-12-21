
let obj = JSON.parse($response.body);

obj = {
	"errcode": "BIS:10200",
	"errmsg": null,
	"data": {
		"cacheDay": "20221219",
		"detResult": "阴性",
		"afterTestTime": "2"
	}
};

$done({body: JSON.stringify(obj)});





