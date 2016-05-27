    var map =
          new Datamap(
            {
              element: document.getElementById('map-container'),
              responsive: true,
              scope: "usa",
              fills:{
                         //DEFAULT MAP COLOR   
                        // defaultFill: 'rgba(241, 241, 241, 1)' // Any hex, color name or rgb/rgba value
                            highRiskColor: '#02bfe7',
                            mediumRiskColor: '#046b99',
                            lowRiskColor: '#9bdaf1',
                            UNKNOWN: 'rgb(0,0,0)',
                            defaultFill: 'rgba(241, 241, 241, 1)'
               },
              
              data:{ 
                 MI: {
                     fillKey:"highRiskColor",
                     avgTtlRisk:"32.4"
                },
                 FL: {
                     fillKey:"mediumRiskColor",
                     avgTtlRisk:"36.6"
                    
                },
                 CA: {
                     fillKey:"lowRiskColor"},
                     avgTtlRisk:"27.1"
               },
                
            geographyConfig: {
                    highlightBorderColor: '#bada55',
                popupTemplate: function(geography, data) {
                    return '<div class="hoverinfo">' + geography.properties.name +'<br>'+ 'Average Total Risk for State:' +  data.avgTtlRisk + ' '
                    },
            highlightBorderWidth: 3
            },
            
            }
          );

          window.addEventListener('resize', function() { map.resize(); });