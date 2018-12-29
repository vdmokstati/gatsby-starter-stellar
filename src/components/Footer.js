import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact details</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Melbourne, Australia</dd>
                <dt>Phone</dt>
                <dd>+ 61 4 21 759 722</dd>
                <dt>Email</dt>
                <dd><a href="#">hi at vdmo dot tv</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.twitter.com/vdmokstati" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/vdmokstati" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/vdmokstati" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.gitrhub.com/vdmokstati" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
        
            </ul>
        </section>
        <p className="copyright">&copy; vdmo.design</a></p>
    </footer>
)

export default Footer
