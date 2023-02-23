// GET
fetch("https://api.datawrapper.de/v3/charts", {
        method: "POST",
        headers: {
            Authorization: "Bearer 7KZnaHUMwTmPVF9wNvDWGuwVdV1VThypJb8ofGC1GMJEZas7RRbQ5PtbO5TSvFeC",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
            "title": "Literacy rates in Africa", 
            "type":"d3-maps-choropleth"
        }
    })
        .then((res) => {
            if (!res.ok) {
                console.log("That's tough");
            }
            res.json();
        })
        .then((id) => console.log(id))
        .catch((err) => {
            console.log(err.message);
        });

