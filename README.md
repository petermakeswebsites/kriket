# Kriket

Kriket is a very simple SvelteKit-powered bug tracking tool. It's hosted on any server that runs node and exposes an API for collecting crashes. It's still in development.

## Front-end

Load into your front-end application from `https://cdn.jsdelivr.net/gh/petermakeswebsites/kriket@main/front-end/kriket.js` or by copying and pasting from `/front-end/kriket.js`

```javascript
<script src="LOCATION_OF_kriket.js" />
<script>
    kriket({
        path: "https://pathto.kriket.server/bugs",
        custom: () => { // Optional function that should return an stringifiable object you want to record. 
            return {
                user: someAuthService.username
            }
        }
    })
</script>
```

## Back-end

Coming soon