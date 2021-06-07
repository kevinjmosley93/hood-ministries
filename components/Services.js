import { Container } from 'react-bootstrap'
import { FaPrayingHands } from 'react-icons/fa'

export const Services = () => {
  return (
    <>
      <Container className='px-4' id='hanging-icons'>
        <h2 className='pb-2  fw-bold lh-1 border-bottom'>Our Services</h2>
        <div className='row g-4 py-3 row-cols-1 row-cols-lg-3'>
          <div className='col d-flex align-items-start'>
            <div className='icon-square bg-light text-dark flex-shrink-0 me-3'></div>
            <div>
              <h2 className='mb-3 fw-bold'>Dedications</h2>
              <p>
                New Churches, New Life/Youth/ Education Centers, New Homes, New
                Business.
              </p>
            </div>
          </div>
          <div className='col d-flex align-items-start'>
            <div className='icon-square bg-light text-dark flex-shrink-0 me-3'></div>
            <div>
              <h2 className='mb-3 fw-bold'>Pastoral Counseling</h2>
              <p>
                General Comments, Counseling, intake, substance use Disorder,
                people dealing with grieving, death of child, suicide, adults
                reentering society, Bullying, victims of child abuse, survivors
                of rape.
              </p>
            </div>
          </div>
          <div className='col d-flex align-items-start'>
            <div className='icon-square bg-light text-dark flex-shrink-0 me-3'></div>
            <div>
              <h2 className='mb-3 fw-bold'>Visitation</h2>
              <p>
                Jail and prison, juvenile detention center, hospitals, mental
                health facilities, homes, nursing homes & hospice facilities.
              </p>
            </div>
          </div>
          <div className='col d-flex align-items-start'>
            <div className='icon-square bg-light text-dark flex-shrink-0 me-3'></div>
            <div>
              <h2 className='mb-3 fw-bold'>Weddings</h2>
              <p>
                Premarital counseling, wedding rehearsals, traditional wedding
                ceremony , modern wedding ceremony, reaffirmation/renewal of
                vows.
              </p>
            </div>
          </div>
          <div className='col d-flex align-items-start'>
            <div className='icon-square bg-light text-dark flex-shrink-0 me-3'></div>
            <div>
              <h2 className='mb-3 fw-bold'>Funerals</h2>
              <p>
                Funerals for Adults, Funerals for Infant or a Child, Funeral for
                non-church members, funerals for person who died by suicide.
              </p>
            </div>
          </div>
          <div className='col d-flex align-items-start'>
            <div className='icon-square bg-light text-dark flex-shrink-0 me-3'></div>
            <div>
              <h2 className='mb-3 fw-bold'>Volunteer Events</h2>
              <p>
                We will speak or host any event where you would like the
                presence of the lord.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
