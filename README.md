# Express Practice

## Install

1. `$ npm install`


## Run

1. `$ npm test && npm start`

## Usage

### Get basket
```
GET
/api/v1/basket

Response

200 [
    {
        "sku": "A",
        "price": 50,
        "special": {
            "quantity": 3,
            "price": 130
        }
    }
]
```

### Get total

```
GET
/api/v1/basket/total

Response

200 { total: 50 }
```

### Scan item

```
PATCH
/api/v1/basket

Body
{ "sku": "A" }

Response

201 null
```
