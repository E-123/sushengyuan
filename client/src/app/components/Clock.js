import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {clock} from './config';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        let hour = (new Date()).getHours();
        let time;
        for (let i in clock) {
            if ((clock[i].time + 1 > hour) && (hour > clock[i].time - 1)) {
                time = i;
            }
        }
        this.state = {
            time: time
        }
    }

    onClockClick(time) {
        this.setState({
            time: time
        });
    }

    render() {
        let {description, time} = clock[this.state.time];
        time = String(time);
        return (
            <div className="clock">
            <svg width="90%" viewBox="0 0 757 758" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                    <g id="back" transform="translate(15.000000, 17.000000)" fill="#D2CE94">
                        <ellipse id="Oval" cx="363" cy="362" rx="363" ry="362"></ellipse>
                    </g>
                    <g id="numbers" transform="translate(36.000000, 28.000000)" fontSize="24" fontFamily="STHeiti" fill="#FFFFFF" fontWeight="500">
                        <text id="10" className={time === '10' ? 'current' : ''}>
                            <tspan x="161.204" y="66">10</tspan>
                        </text>
                        <text id="11" className={time === '11' ? 'current' : ''}>
                            <tspan x="248.204" y="31">11</tspan>
                        </text>
                        <text id="12" className={time === '12' ? 'current' : ''}>
                            <tspan x="329.204" y="21">12</tspan>
                        </text>
                        <text id="13" className={time === '13' ? 'current' : ''}>
                            <tspan x="418.204" y="35">13</tspan>
                        </text>
                        <text id="14" className={time === '14' ? 'current' : ''}>
                            <tspan x="501.204" y="73">14</tspan>
                        </text>
                        <text id="15" className={time === '15' ? 'current' : ''}>
                            <tspan x="575.204" y="131">15</tspan>
                        </text>
                        <text id="16" className={time === '16' ? 'current' : ''}>
                            <tspan x="628.562557" y="206">16</tspan>
                        </text>
                        <text id="17" className={time === '17' ? 'current' : ''}>
                            <tspan x="655.204" y="287">17</tspan>
                        </text>
                        <text id="18" className={time === '18' ? 'current' : ''}>
                            <tspan x="664.204" y="368">18</tspan>
                        </text>
                        <text id="19" className={time === '19' ? 'current' : ''}>
                            <tspan x="651.204" y="452">19</tspan>
                        </text>
                        <text id="20" className={time === '20' ? 'current' : ''}>
                            <tspan x="619.204" y="528">20</tspan>
                        </text>
                        <text id="21" className={time === '21' ? 'current' : ''}>
                            <tspan x="567.204" y="597">21</tspan>
                        </text>
                        <text id="22" className={time === '22' ? 'current' : ''}>
                            <tspan x="492.204" y="655">22</tspan>
                        </text>
                        <text id="23" className={time === '23' ? 'current' : ''}>
                            <tspan x="410.204" y="687">23</tspan>
                        </text>
                        <text id="0" className={time === '0' ? 'current' : ''}>
                            <tspan x="334.352" y="697">0</tspan>
                        </text>
                        <text id="1" className={time === '1' ? 'current' : ''}>
                            <tspan x="245.352" y="684">1</tspan>
                        </text>
                        <text id="2" className={time === '2' ? 'current' : ''}>
                            <tspan x="166.352" y="652">2</tspan>
                        </text>
                        <text id="3" className={time === '3' ? 'current' : ''}>
                            <tspan x="97.352" y="599">3</tspan>
                        </text>
                        <text id="4" className={time === '4' ? 'current' : ''}>
                            <tspan x="45.352" y="534">4</tspan>
                        </text>
                        <text id="5" className={time === '5' ? 'current' : ''}>
                            <tspan x="12.352" y="455">5</tspan>
                        </text>
                        <text id="6" className={time === '6' ? 'current' : ''}>
                            <tspan x="0.352" y="362">6</tspan>
                        </text>
                        <text id="7" className={time === '7' ? 'current' : ''}>
                            <tspan x="13.352" y="273">7</tspan>
                        </text>
                        <text id="8" className={time === '8' ? 'current' : ''}>
                            <tspan x="40.352" y="194">8</tspan>
                        </text>
                        <text id="9" className={time === '9' ? 'current' : ''}>
                            <tspan x="93.352" y="123">9</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('未')} id="未" transform="translate(374.000000, 80.000000)">
                        <path d="M79.3489631,0.163871701 L0.842336129,299.964502 L226.700568,83.1249572 C226.700568,83.1249572 189.180296,47.0809384 153.788979,27.5279938 C118.397663,7.97504914 79.3489631,0.163871701 79.3489631,0.163871701 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M152.0781,154.732684 C125.707848,127.855873 91.8805227,108.160244 53.8921145,98.9016908 L1.30345197,298.449559 L152.0781,154.732684 Z" id="middle小肠" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="小肠" transform="translate(88.663762, 151.135384) rotate(33.000000) translate(-88.663762, -151.135384) " fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="64.6637621" y="160.135384">小肠</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="113.5" y="92">未</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('午')} id="午" transform="translate(299.000000, 69.000000)">
                        <path d="M154.348963,11.1638717 L75.8423361,310.964502 L0.414582261,11.1638717 C0.414582261,11.1638717 43.7413747,0.893233303 75.8423361,0.893233303 C107.943298,0.893233303 154.348963,11.1638717 154.348963,11.1638717 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M129.086071,109.949061 C113.205708,106.062392 96.5966686,104 79.5,104 C61.2727923,104 43.5998368,106.344166 26.7732298,110.743957 L76.36452,309.833415 L129.086071,109.949061 Z" id="middle心" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="心" fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="64.5" y="151">心</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="57.5" y="65">午</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('巳')} id="巳" transform="translate(158.000000, 80.000000)">
                        <path d="M0.124910651,82.226968 L216.842336,299.964502 L141.414582,0.163871701 C141.414582,0.163871701 91.2577924,15.0157249 64.540222,31.4456241 C37.8226516,47.8755232 0.124910651,82.226968 0.124910651,82.226968 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M167.034156,99.938674 C130.574443,109.61678 98.1202381,128.954667 72.6562574,155.00393 L217.623332,299.56914 L167.034156,99.938674 Z" id="middle脾" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="脾" fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="121.5" y="161">脾</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="65.5" y="91">巳</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('辰')} id="辰" transform="translate(79.000000, 162.000000)">
                        <path d="M79.1249107,0.226968027 L295.842336,217.964502 L0.839291706,132.28002 C0.839291706,132.28002 19.6804496,84.7614161 32.9279502,61.0067974 C46.1754509,37.2521786 79.1249107,0.226968027 79.1249107,0.226968027 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M151.250629,73.4200577 C127.435677,97.9206773 109.784764,128.312244 100.761015,162.161595 L296.021376,218.694538 L151.250629,73.4200577 Z" id="middle胃" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="胃" fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="141" y="137">胃</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="52.5" y="102">辰</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('卯')} id="卯" transform="translate(69.000000, 294.000000)">
                        <path d="M10.8392917,162.78795 L305.842336,85.9645021 L10.8392917,0.280020365 C10.8392917,0.280020365 0.914902983,50.9979629 0.914902983,81.5339851 C0.914902983,112.070007 10.8392917,162.78795 10.8392917,162.78795 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M110.774481,30.1111111 C106.35438,46.6741042 104,64.0654495 104,82 C104,101.355712 106.742293,120.078719 111.864017,137.810574 L304.392894,86.3455771 L110.774481,30.1111111 Z" id="middle大肠" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="大-肠" fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="131.5" y="76">大</tspan>
                            <tspan x="131.5" y="100">肠</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="31.5" y="100">卯</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('寅')} id="寅" transform="translate(79.000000, 378.000000)">
                        <path d="M0.839291706,78.7879499 L295.842336,1.96450206 L72.526663,208.582853 C72.526663,208.582853 37.7873299,171.358164 25.8288756,146.866285 C13.8704212,122.374406 0.839291706,78.7879499 0.839291706,78.7879499 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M101.618992,52.9551241 C110.772115,85.1824814 127.7762,114.166471 150.464435,137.766643 L297.501549,0.894483272 L101.618992,52.9551241 Z" id="middle肺" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="肺" fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="139.5" y="88">肺</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="56.5" y="138">寅</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('丑')} id="丑" transform="translate(151.000000, 379.000000)">
                        <path d="M145.076045,297.528606 L223.842336,0.964502059 L0.526663048,207.582853 C0.526663048,207.582853 39.7637475,244.533967 59.6048589,259.589842 C79.4459703,274.645717 145.076045,297.528606 145.076045,297.528606 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M78.5589637,136.864906 C104.180893,163.481292 137.038081,183.237296 174.016315,193.056589 L223.943213,1.04896074 L78.5589637,136.864906 Z" id="middle肝" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="肝" fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="126.5" y="150">肝</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="71.5" y="231">丑</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('子')} id="子" transform="translate(296.000000, 379.000000)">
                        <path d="M0.076045175,297.528606 L78.8423361,0.964502059 L156.523603,297.528606 C156.523603,297.528606 100.215125,306.908968 78.8423361,306.908968 C57.4695473,306.908968 0.076045175,297.528606 0.076045175,297.528606 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M28.725205,192.979059 C45.8654807,197.557383 63.8939755,200 82.5,200 C98.6782305,200 114.419815,198.153241 129.520506,194.661487 L80.140957,1.36884115 L28.725205,192.979059 Z" id="middle胆" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="胆" fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="67.5" y="174">胆</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="59" y="271">子</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('亥')} id="亥" transform="translate(374.000000, 378.000000)">
                        <path d="M220.796288,220.026616 L0.842336129,1.96450206 L78.5236025,298.528606 C78.5236025,298.528606 137.039224,281.570059 159.408937,266.362729 C181.77865,251.155399 220.796288,220.026616 220.796288,220.026616 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M50.6502053,195.860745 C87.63018,187.478265 120.802556,169.239445 147.182269,144.093031 L1.91122474,0.952643347 L50.6502053,195.860745 Z" id="middle三焦" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="三焦" transform="translate(85.500000, 145.000000) rotate(-29.000000) translate(-85.500000, -145.000000) " fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="61.5" y="154">三焦</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="105.5" y="235">亥</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('戌')} id="戌" transform="translate(374.000000, 379.000000)">
                        <path d="M220.796288,219.026616 L0.842336129,0.964502059 L299.358557,85.8004389 C299.358557,85.8004389 285.248601,130.685215 271.268477,154.500113 C257.288353,178.315011 220.796288,219.026616 220.796288,219.026616 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M146.903112,143.358639 C171.41193,120.083133 190.08767,90.8577171 200.549387,58.0343736 L1.23075188,0.412107933 L146.903112,143.358639 Z" id="middle心包" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="心-包" transform="translate(149.500000, 80.000000) rotate(41.000000) translate(-149.500000, -80.000000) " fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="137.5" y="77">心</tspan>
                            <tspan x="137.5" y="101">包</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="202.5" y="148">戌</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('酉')} id="酉" transform="translate(374.000000, 301.000000)">
                        <path d="M301.358557,0.00346310855 L0.842336129,78.9645021 L299.358557,163.800439 C299.358557,163.800439 313.463923,106.071568 313.463923,78.9645021 C313.463923,51.8574357 301.358557,0.00346310855 301.358557,0.00346310855 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M200.487934,136.226842 C206.667261,116.906987 210,96.3379599 210,75 C210,58.1070821 207.911161,41.6961034 203.974712,26.0053569 L1.77164057,77.5193508 L200.487934,136.226842 Z" id="middle肾" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="肾" fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="154.5" y="85">肾</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="238.5" y="96">酉</tspan>
                        </text>
                    </g>
                    <g onClick={() => this.onClockClick('申')} id="申" transform="translate(374.000000, 161.000000)">
                        <path d="M301.358557,140.003463 L0.842336129,218.964502 L225.595435,0.693729465 C225.595435,0.693729465 260.395047,40.9741068 272.817187,64.5942567 C285.239327,88.2144066 301.358557,140.003463 301.358557,140.003463 Z" stroke="#FFFFFF" fill="#94BA6D"></path>
                        <path d="M203.879336,165.626758 C195.026778,130.630609 176.979257,99.2321449 152.419156,74.0811182 L1.13769576,217.967183 L203.879336,165.626758 Z" id="middle膀胱" stroke="#FFFFFF" fill="#B3AF4B"></path>
                        <text id="膀-胱" transform="translate(149.000000, 129.000000) rotate(-33.000000) translate(-149.000000, -129.000000) " fontFamily="STHeiti" fontSize="24" fontWeight="500" fill="#FFFFFF">
                            <tspan x="137" y="126">膀</tspan>
                            <tspan x="137" y="150">胱</tspan>
                        </text>
                        <text fontFamily="STHeiti" fontSize="43" fontWeight="500" fill="#FFFFFF">
                            <tspan x="205.879336" y="108">申</tspan>
                        </text>
                    </g>
                    <circle id="Oval-2" stroke="#FFFFFF" strokeWidth="8" cx="378" cy="378" r="308"></circle>
                    <ellipse id="Oval-4" stroke="#FFFFFF" cx="377" cy="380.5" rx="137" ry="137.5"></ellipse>
                    <ellipse id="Oval-5" stroke="#FFFFFF" fill="" cx="376.5" cy="383" rx="92.5" ry="93"></ellipse>
                    <circle id="Oval" stroke="#D0CC99" strokeWidth="14" cx="378" cy="378" r="313"></circle>
                </g>
                </svg>
                <div className="clock-description">
                    <p><strong>{clock[this.state.time].shichen}</strong></p>
                    <p className="song">{clock[this.state.time].yangshengge}</p>
                    <p>{clock[this.state.time].description}</p>
                </div>
            </div>
        );
    }
}
