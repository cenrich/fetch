fetch('https://raw.githubusercontent.com/cenrich/fetch/master/cv.json')
    .then(response => response.json())
    .then(res => {
        console.log(res);
        // const {data} = res
        // data.map(({id, name}) => console.log(`id: ${id}\nname: ${name}`))
    })