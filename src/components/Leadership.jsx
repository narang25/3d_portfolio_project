import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, title, organization, date, description, icon, iconBg }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.4, 0.75)}
    className='bg-black-100 p-6 rounded-2xl w-full sm:w-[360px] flex flex-col gap-4'
  >
    <div className='flex items-center gap-4'>
      <div
        className='w-14 h-14 rounded-full flex justify-center items-center flex-shrink-0'
        style={{ background: iconBg }}
      >
        <img src={icon} alt={organization} className='w-[70%] h-[70%] object-contain' />
      </div>
      <div>
        <h3 className='text-white font-bold text-[18px] leading-snug'>{title}</h3>
        <p className='text-[#915EFF] text-[14px] font-semibold'>{organization}</p>
        <p className='text-secondary text-[13px]'>{date}</p>
      </div>
    </div>
    <p className='text-secondary text-[14px] leading-[24px]'>{description}</p>
  </motion.div>
);

const Leadership = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition & Roles</p>
        <h2 className={styles.sectionHeadText}>Leadership & Achievements</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Leadership, "leadership");
