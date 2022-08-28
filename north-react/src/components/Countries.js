import React, { Component } from 'react';

class Countries extends Component {

    state = {
        error: null,
        isLoaded: false,
        places: []
    };

    componentDidMount() {
      
            fetch(`https://bucketlist-cd32.restdb.io/rest/${this.props.countryName}`, {
                method: "get",
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "x-apikey": "	6308ba876ca2e567447720de",
                  "cache-control": "no-cache"
                }
            })
          .then(res => res.json())
          .then(
            (result) =>
             {
                 this.setState({
                     isLoaded: true,
                     places: result
                   });
                 }
                ,
                 (error) => {
                     this.setState({
                       isLoaded: true,
                       error
                     });
                   },
                )
        }

        render() {
          const { error, isLoaded, places } = this.state;
  
          if (error) {
              return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
              return <div><p className="text-center">Loading...</p></div>;
          } if (this.state.places.length === 0) {
              return (
                  <p>We don't have any suggestion for this. Try another activity, or get some inspiration from our premade trips.</p>
              )
              
          } else {
  
              let itemContainer = [];
            for (let i = 0; i < this.state.places.length; i++) {
              let data = {
                "id": this.state.places[i]._id,
                "name": this.state.places[i].name,
                "imgUrl": this.state.places[i].imgUrl
              }            
                itemContainer.push(places);
              }
  
              return (
                
                  //console.log(this.state.places[1].name)
                  <div>
                    
                      {places.map(place => <p>{place.name}</p>)}
                  </div>
                );
  
              }
            }
          }

export default Countries