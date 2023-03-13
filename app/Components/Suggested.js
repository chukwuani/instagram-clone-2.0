import { faker } from '@faker-js/faker';
import Link from 'next/link';

export default function Suggested() {
const randomName = faker.name.fullName();
    
  return (
    <aside className="right-side-homepage">
    <div className="my-account">
        <span>
         <img src="https://api.dicebear.com/5.x/avataaars-neutral/svg?seed=Muffin" alt="avatar" />
        </span>

        <div className="account-info">
           <Link href="/profile" style={{color: "black"}}><p className="account-info-name">the_wylde</p></Link> 
            <p className="account-cto">Allen Brown</p>
        </div>

        <p className="switch"><a href="#">Switch</a></p>
    </div>

    <div className="suggestion">
        <p className="suggest">Suggestions For You</p>
        <p className="suggest-cto" ><a href="#">see all</a></p>
    </div>

    <div className="other-account">
        <span>
            <img src="https://picsum.photos/id/2/200/300" />
        </span>

        <div className="other-info">
            <p>bosszchima</p>
            <p className="other-cto">Followed by de_real_teddy</p>
        </div>

        <p className="follow"><a href="#">Follow</a></p>
    </div>

    <div className="other-account">
        <span>
            <img src="https://picsum.photos/id/27/200/300" />
        </span>

        <div className="other-info">
            <p>kizzy.choco</p>
            <p className="other-cto">New to Instagram</p>
        </div>

        <p className="follow"><a href="#">Follow</a></p>
    </div>

    <div className="other-account">
        <span>
            <img src="https://picsum.photos/id/230/200/300" />
        </span>

        <div className="other-info">
            <p>the_don_cito</p>
            <p className="other-cto">Followed by de_real_teddy</p>
        </div>

        <p className="follow"><a href="#">Follow</a></p>
    </div>

    <div className="other-account">
        <span>
            <img src="https://picsum.photos/id/257/200/300"/>
        </span>

        <div className="other-info">
            <p>ah_mah_ra_</p>
            <p className="other-cto">New to Instagram</p>
        </div>

        <p className="follow"><a href="#">Follow</a></p>
    </div>

    <div className="other-account">
        <span>
            <img src="https://picsum.photos/id/237/200/300" />
        </span>

        <div className="other-info">
            <p>iloamaeke_samuel_</p>
            <p className="other-cto">Suggested for you</p>
        </div>

        <p className="follow"><a href="#">Follow</a></p>
    </div>

    <div className="aside-footer">
        <ul className="aside-footer-list">
            <li className="aside-footer-list-item">
                <a href="#">About •</a>
            </li>
            <li className="aside-footer-list-item">
                <a href="#">Help •</a>
            </li>
            <li className="aside-footer-list-item">
                <a href="#">Press •</a>
            </li>
            <li className="aside-footer-list-item">
                <a href="#">API •</a>
            </li>
            <li className="aside-footer-list-item">
                <a href="#">Jobs •</a>
            </li>
            <li className="aside-footer-list-item">
                <a href="#">Privacy •</a>
            </li>
            <li className="aside-footer-list-item">
                <a href="#">Terms •</a>
            </li>
            <li className="aside-footer-list-item">
                <a href="#">Locations •</a>
            </li>
            <li className="aside-footer-list-item">
                <a href="#">Language</a>
            </li>
        </ul>

        <div className="aside-footer-title">
            <p>© 2023 INSTAGRAM FROM META</p>
        </div>
    </div>
</aside>
  )
}
