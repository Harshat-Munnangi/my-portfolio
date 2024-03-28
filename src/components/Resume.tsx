import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";


const Resume = () => {

    const pdfURL = 'src/assets/harshat_munnangi_resume_no.pdf';
    return (
        <div className="container">
            <div className="row">
                <button className="download-button" >
                    <a href={pdfURL} target="_blank" rel="noopener noreferrer">
                        <AiOutlineDownload />&nbsp;Download CV
                    </a>
                    
                </button>
            </div>

            <div className="row">
                <Document file={pdfURL}>
                    <Page pageNumber={1} />
                </Document>
            </div>

            <div className="row">
                <button className="download-button" >
                    <a href={pdfURL} target="_blank" rel="noopener noreferrer">
                        <AiOutlineDownload />&nbsp;Download CV
                    </a>
                    
                </button>
            </div>
            
        </div>
    )
}

export default Resume;