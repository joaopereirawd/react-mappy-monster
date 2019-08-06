# MappyMonster


## Getting Started

1. Installation
    ```
    yarn add react-mappy-monster
    or
    npm i react-mappy-monster
    ```
2. Usage & Configuration
```js
 import MappyMonster, { InfoWindow, Content, Youtube } from 'react-mappy-monster';
```
3. Wrapper Component
```js
<MappyMonster
    id='mappyMonster'
    apiKey=''
    width=''
    height='450px'
    markerIcon={''}
    markerTitle='YOUR_TITLE'
    location={{
        lat: 37.422204,
        lng: -122.083596
    }}
    zoom={5}
    onClickZoom={17} //Done 
    mapTypeControl={true}
    streetViewControl={true}
    rotateControl={true}
    fullscreenControl={true}
    scrollwheel={false}
    infoWindowOffSetY={-60}
    infoWindowStartOpen={false}
>

    <InfoWindow>
        <Youtube code="RiIE5GsiVWQ" autoPlay={true} />
        <Content>
            <p>Your content goes here</p>
            <button onClick={() => alert('this is amazing!!!')} className="yourClass" style={
                  {
                      color: '#ee6f9b',
                      background: '#333',
                      padding: '10px 20px',
                      borderRadius: '50px',
                      border:'4px solid #000',
                      fontWeight:'600',
                      background: 'transparent'
                  }}>Call To Action
              </button>
        </Content>
    </InfoWindow>
</MappyMonster>
```
## Props 


## Versioning
The `react-cookie-bubble` library follows [Semantic Versioning](https://semver.org/). </br>
`[MAJOR].[MINOR].[PATCH]` 

## Support
If you encounter an issue or want to request a feature, you can [create an issue](https://github.com/joaopereirawd/react-mappy-monster/issues/new).
