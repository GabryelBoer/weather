export type Props = {
    
    name: string,
    sys: {
        country: string,
    },

    main: {
        feels_like: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    },

    weather: [{
        description: string,
        icon: string,
        main: string,
    }]
}