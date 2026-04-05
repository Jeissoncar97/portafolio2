import React from 'react'
import Person from '../assets/icons/Person'
import Fotojeisson from '../assets/Fotojeisson.png'

const AboutMe = () => {
  return (
    <section id='about-me' className='section undefined scroll-m-20 w-full mx-auto container lg:max-w-5xl md:max-w-3xl pb-16 md:pb-36'>
      <h2 className='flex items-center mb-6 text-3xl  gap-x-3 text-white undefined'><Person />Sobre mí</h2>
      <article className='flex flex-col items-center justify-center gap-8 text-white md:flex-row'>
        <div className='[&>p]:mb-4  text-pretty order-2 md:order-1 font-normal '>
            <p>Me llamo <strong className='text-(--green-htb)'>Jeisson Andrés </strong>y soy estudiante de Ingeniería en Sistemas, enfocado en <strong className='text-(--green-htb)'>redes y ciberseguridad</strong>. He desarrollado proyectos prácticos como la <strong className='text-(--green-htb)'>implementación y mejora de la seguridad en redes</strong> reales, así como la resolución de máquinas tipo CTF documentadas en un foro propio.</p>
            <p>Actualmente busco seguir creciendo en el área de <strong className='text-(--green-htb)'>redes y seguridad informática</strong>, fortaleciendo mis habilidades en análisis de vulnerabilidades, soporte técnico y administración de sistemas.</p>
        </div>
        <img src={Fotojeisson} alt="Jeisson Andrés" className='order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 ' />
      </article>
    </section>
  )
}

export default AboutMe
