import { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

const services = [
  {
    id: 0,
    title: 'Pastoral Counseling',
    body: 'General Comments, Counseling, intake, substance use Disorder, people dealing with grieving, death of child, suicide, adults'
  },
  {
    id: 1,
    title: 'Visitation',
    body: 'Jail and prison, juvenile detention center, hospitals, mental health facilities, homes, nursing homes & hospice facilities.'
  },
  {
    id: 3,
    title: 'Funerals',
    body: 'Funerals for Adults, Funerals for Infant or a Child, Funeral for non-church members, funerals for person who died by suicide.'
  },
  {
    id: 4,
    title: 'Weddings',
    body: ' Premarital counseling, wedding rehearsals, traditional wedding ceremony , modern wedding ceremony, reaffirmation/renewal of vows.'
  },
  {
    id: 5,
    title: 'Volunteer Events',
    body: 'We will speak or host any event where you would like the presence of the lord.'
  }
]

export const Services = () => {
  const [expanded, setExpanded] = useState(false)
  const [uid, setUid] = useState(null)
  return (
    <>
      <Container className='px-4' id='hanging-icons'>
        <h2 className='pb-2  fw-bold lh-1 border-bottom'>Our Services</h2>
        <section className='row'>
          <div className='col-md-5'>
            <Image
              className='rounded pt-3'
              style={{ objectFit: 'cover' }}
              height={470}
              width={730}
              src='/services.jpg'
              alt='services-img'
            />
          </div>
          <div className='col-md-7 g-2'>
            {services.map(({ title, body, id }) => (
              <article key={id} className='question border-bottom'>
                <header
                  onClick={() => {
                    setUid(id)
                    setExpanded(!expanded)
                    console.log({ uid })
                  }}>
                  <h4 className='question-title'>{title}</h4>
                  <button className='button'>
                    {expanded && id === uid ? (
                      <MdKeyboardArrowDown />
                    ) : (
                      <MdKeyboardArrowUp />
                    )}
                  </button>
                </header>
                {expanded && id === uid && <p>{body}</p>}
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  )
}
