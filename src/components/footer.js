
function Footer() {
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
    return (
        <footer id="translate" className="w3-center w3-black w3-padding-64 w3-hover-orange">
        <a href="#home" className="w3-btn w3-border w3-border-white w3-round-xlarge"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
        <h4><b>Chardikala</b></h4>
        <div id="google_translate_element"></div>
            <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </footer>
    )
}