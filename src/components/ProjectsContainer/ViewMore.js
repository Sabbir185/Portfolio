import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

const ViewMore = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="view-more"
                aria-expanded={open}
                className="d-block mx-auto px-5 btn-success"
            >
                View More
            </Button>
            <Collapse in={open}>
                <div id="view-more" className="text-light pt-5">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>
        </div>
    );
};

export default ViewMore;