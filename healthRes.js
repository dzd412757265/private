
let obj = JSON.parse($response.body);

obj = {
	"errcode": "BIS:10200",
	"errmsg": null,
	"data": {
		"cacheDay": "20221017",
		"detResult": "阴性",
		"afterTestTime": "0"
	}
};

$done({body: JSON.stringify(jkbTestTime)});





