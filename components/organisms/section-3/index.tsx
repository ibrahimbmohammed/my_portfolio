/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Experience from './data';

function SectionThree() {
    return (
        <section
            id="sectionThree"
            className="sect h-fit pb-6 lg:h-screen relative font-theme flex justify-evenly  px-4"
        >
            <div className="inline-block w-72 h-72   moon-bg rounded-full absolute rotate-12 " />
            <span className="inline-block  absolute -top-[8rem] left-0">
                <h1 className="font-extrabold  self-center mx-auto text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 mt-40 md:mt-32 md:ml-16">
                    EXPERIENCE
                </h1>
            </span>
            <div className=" w-full flex flex-col md:flex-row">
                <div className="w-full flex items-center justify-center">
                    <VerticalTimeline>
                        {Experience &&
                            Experience.map((n) => (
                                <VerticalTimelineElement
                                    key={n.id}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        background: 'rgb(21, 24, 31)',
                                        color: '#888',
                                    }}
                                    contentArrowStyle={{
                                        borderRight: '7px solid  rgb(21, 24, 31)',
                                    }}
                                    date={n.date}
                                    iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
                                >
                                    <h3 className="vertical-timeline-element-title">{n.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        {n.location}
                                    </h4>
                                    <p>{n.description}</p>
                                </VerticalTimelineElement>
                            ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
}

export default SectionThree;
