<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
    name: "MyMap",
    data: function() {
        var me = {
            name: 'crocodile',
            description: 'hello, world!',
            coord: [0, 0],
            avatar: 'https://1.bp.blogspot.com/-LZL7jGWmL3Q/X-FcwoOnE2I/AAAAAAABdEs/qUrY1ClrQrMukkdaEnZK8-Bdob7mOdmQgCNcBGAsYHQ/s1307/onepiece13_crocodile.png',
            friendStatus: 'me'
        }
        console.log(me.coord)

        let users = [
            {
                name: 'enel',
                description: 'zap',
                coord: [140.87627044608087, 38.26534039847173],
                avatar: 'https://1.bp.blogspot.com/-WoPLgzbefuw/X-FcxFa-YjI/AAAAAAABdE0/42S9V3wWi400mGKLEiB_pQT-dqTKT28kwCNcBGAsYHQ/s1156/onepiece14_enel.png',
                friendStatus: 'pending'
            },
            {
                name: 'sanji',
                description: '<3',
                coord: [140.87080254765888, 38.257785217794954],
                avatar: 'https://1.bp.blogspot.com/-HPG_x7XPky8/X-FctLTLkKI/AAAAAAABdEE/xs4T8m0FiBAFptXHGQhQ2c9ZmVWtaeQSgCNcBGAsYHQ/s1028/onepiece05_sanji.png',
                friendStatus: 'mutual'
            },
            {
                name: 'doflamingo',
                description: 'i hate js',
                coord: [140.85687883425717, 38.25972457678468],
                avatar: 'https://1.bp.blogspot.com/-VACf4WfKNOk/X-Fcx7DWraI/AAAAAAABdE8/KT0UudaIHrMtbFvjC02yLuPLNBZurGYpQCNcBGAsYHQ/s1103/onepiece17_doflamingo.png',
                friendStatus: 'none'
            }
        ]
        let features = []
        return {
            accessToken: "pk.eyJ1IjoieXVzdWtldGFrYWhhc2hpIiwiYSI6ImNrdHpjb3o2NjF3OHYzM3FuaWFuZDAyb2QifQ.ptOTxfzqzNFHOXtDGwvLwg",
            me,
            users,
            features,
        };
    },
    methods: {
        displayUser: function(user, map) {
            map.loadImage(
                user.avatar,
                (error, image) => {
                    if (error) {console.log('hoge'); throw error;}
                    map.addImage('img_'+ user.name, image);
                }
            );
            let feature = {
                'type': 'Feature',
                'properties': {
                    'title': user.name,
                    'description': user.description,
                    'icon': 'img_'+ user.name,
                    'friendStatus': user.friendStatus,
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': user.coord
                },
            }
            this.features.push(feature);
        }
    },
    mounted() {

        mapboxgl.accessToken = this.accessToken;
        console.log(this.me.coord)
        var map = new mapboxgl.Map({
            container: 'map',
            maxZoom: 25,
            minZoom: 3,
            style: "mapbox://styles/yusuketakahashi/cktzf9a6t1vyh18pkxakssobh",
            center: [0, 0],
            zoom: 15
        });
        /*
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                showAccuracyCircle: true,
                showUserLocation:true,
                trackUserLocation: true,
                showUserHeading: false
            }),
            //"top-right"
        );
        */

        // let me = this.me;
        // let displayUser = this.displayUser;
        map.on('load', () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.me.coord[0] = position.coords.longitude;
                    this.me.coord[1] = position.coords.latitude;
                    console.log(this.me.coord)
                    map.setCenter(this.me.coord)
                    this.displayUser(this.me, map);
                    for (let i = 0; i <this.users.length; ++i) {
                        this.displayUser(this.users[i], map);
                    }
                    map.addSource('points', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': this.features
                        }
                    });
                    map.addLayer({
                        'id': 'points',
                        'type': 'symbol',
                        'source': 'points',
                        'layout': {
                            'icon-image': '{icon}',
                            'icon-allow-overlap': true,
                            'icon-size': 0.1
                        }
                    });

                    map.on('click', 'points', (e) => {
                        const coordinates  = e.features[0].geometry.coordinates.slice();
                        const title        = e.features[0].properties.title;
                        const description  = e.features[0].properties.description;
                        const friendStatus = e.features[0].properties.friendStatus;
                        const divElement = document.createElement('div');
                        divElement.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
                        if (friendStatus === 'none') {
                            const button = document.createElement('div');
                            button.innerHTML = '<button type="button" class="btn btn-light">Send a Friend Request</button>';
                            divElement.appendChild(button);
                        } else if (friendStatus === 'pending') {
                            const button = document.createElement('div');
                            button.innerHTML = '<button type="button" class="btn btn-light" disabled>Pending</button>';
                            divElement.appendChild(button);
                        } else if (friendStatus === 'mutual') {
                            const button = document.createElement('div');
                            button.innerHTML = '<button type="button" class="btn btn-light">Chat</button>';
                            divElement.appendChild(button);
                        }
                        new mapboxgl.Popup()
                            .setLngLat(coordinates)
                            .setDOMContent(divElement)
                            .addTo(map);
                    });
                    map.on('mouseenter', 'places', () => {
                        map.getCanvas().style.cursor = 'pointer';
                    });
                    map.on('mouseleave', 'places', () => {
                        map.getCanvas().style.cursor = '';
                    });
                }
            )
        })
    },
};
</script>

<style scoped>
#map {
    width: 100%;
    height: 100%;
}
</style>
