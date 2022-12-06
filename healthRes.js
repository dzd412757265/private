
let obj = JSON.parse($response.body);

obj = {
	"errcode": "BIS:10200",
	"errmsg": null,
	"data": {
		"cacheDay": "20221206",
		"detResult": "阴性",
		"afterTestTime": "1"
	}
};

$done({body: JSON.stringify(obj)});





