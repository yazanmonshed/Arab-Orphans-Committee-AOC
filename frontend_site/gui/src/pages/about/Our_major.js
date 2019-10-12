import React from 'react'
import {Button, Collapse} from 'react-bootstrap'
export default function Our_major() {
    const [open, setOpen] = useState(false);
            
            return (
                <div>
            
                <Button
                onClick={() => setOpen(!open)}
                aria-controls="our_major"
                aria-expanded={open}
                >
                click
                </Button>
                <Collapse in={open}>
                <div id="our_major">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
                </Collapse>
                         
        </div>
    )
}


// function Example() {
   
  
    
//   }
  
//   render(<Example />);