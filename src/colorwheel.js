export default function ColorWheel({ sharedState }) {

    return <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path id="arc0" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#FB01F9"
                fillOpacity={sharedState==='C'? 0.9:0.1}
                transform="translate(200,200) rotate(-105)" />
    
            <path id="arc1" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#FD0178"
                fillOpacity={sharedState==='C#'? 0.9:0.1}
                transform="translate(200,200) rotate(-75)" />
    
            <path id="arc2" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#FA0600"
                fillOpacity={sharedState==='D'? 0.9:0.1}
                transform="translate(200,200) rotate(-45)" />
    
            <path id="arc3" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#FC7F01"
                fillOpacity={sharedState==='D#'? 0.9:0.1}
                transform="translate(200,200) rotate(-15)" />
    
            <path id="arc4" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#FDFD06"
                fillOpacity={sharedState==='E'? 0.9:0.1}
                transform="translate(200,200) rotate(15)" />
    
            <path id="arc5" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#A5EC04"
                fillOpacity={sharedState==='F'? 0.9:0.1}
                transform="translate(200,200) rotate(45)" />
    
            <path id="arc6" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#01E300"
                fillOpacity={sharedState==='F#'? 0.9:0.1}
                transform="translate(200,200) rotate(75)" />
    
            <path id="arc7" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#01E9E7"
                fillOpacity={sharedState==='G'? 0.9:0.1}
                transform="translate(200,200) rotate(105)" />
    
            <path id="arc8" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#037AF7"
                fillOpacity={sharedState==='G#'? 0.9:0.1}
                transform="translate(200,200) rotate(135)" />
     
            <path id="arc9" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#0001FB"
                fillOpacity={sharedState==='A'? 0.9:0.1}
                transform="translate(200,200) rotate(165)" />
    
            <path id="arc10" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#7E00F9"
                fillOpacity={sharedState==='A#'? 0.9:0.1}
                transform="translate(200,200) rotate(195)" />
    
            <path id="arc11" d="M 0 0 L 100 0 A 100 100 0 0 1 87 50 L 0 0"
                fill="#BA04FA"
                fillOpacity={sharedState==='B'? 0.9:0.1}
                transform="translate(200,200) rotate(225)" />
    
        </g>
        <style>
            #arc0 {            
            }
            #arc1 {            
            }
            #arc2 {            
            }
            #arc3 {            
            }
            #arc4 {            
            }
            #arc5 {            
            }
            #arc6 {            
            }
            #arc7 {            
            }
            #arc8 {            
            }
            #arc9 {            
            }
            #arc10 {            
            }
            #arc11 {            
            }
      </style>
        <script>
        </script>
    </svg>
}