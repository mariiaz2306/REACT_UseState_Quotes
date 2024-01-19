import './QuoteSingle.css'
export default function QuoteSingle({ text, author }) {
    return (
        <div className="quote-single">
            <h1 className="header">{text}</h1>
            <p className="author">— {author}</p>
        </div>
    )
}