import React from 'react';

export default function Proposal(proposal) {

  const form = (femaleForm, maleForm) => proposal['testator.sex'] === "male" ? maleForm : femaleForm

  return (
    <div>
      <h1>Sad rejonowy - {proposal.court} | wydział cywilny</h1>
      <div style={{ textAlign: 'right' }}>
        <h3>{proposal.lawyer}</h3>
        <h3>z Kancelarii (w nagłówku)</h3>
        <h3>pełnomocnik wnioskodawczyni/wnioskodawcy</h3>
        {proposal.applicants &&
          proposal.applicants.map((a) => (
            <div key={a['applicants.name']}>
              <h3>{a['applicants.name']}</h3>
              <h3>{a['applicants.address']}</h3>
              <h3>PESEL: {a['applicants.pesel']}</h3>
            </div>
          ))}
      </div>
      <h1 style={{ textAlign: 'center' }}>Wniosek</h1>
      <h3 style={{ textAlign: 'center' }}>o stwierdzenie nabycia spadku</h3>

      <p>
        I. Wnoszę o stwierdzenie, że spadek po {form("zmarłej", "zmarłym")} w dniu{' '}
        {proposal['testator.name'] && (
          <>
            <i>{proposal['testator.dateOfDeath']}</i>,{' '}
            <i>{proposal['testator.name']}</i>,{' '}
            <i>
              {form('córce','synowi')}{' '}
              {proposal['testator.parents']}
            </i>
            , z domu <i>Nowak</i>, ostatnio {form("zamieszkałej", "zamieszkałym")} w{' '}
            <i>{proposal['testator.address']}</i>, na mocy dziedziczenia
            ustawowego, wraz z dobrodziejstwem inwentarza nabyli:
          </>
        )}
      </p>
      <ul>
        {proposal.applicants &&
          proposal.applicants.map((a) => (
            <li key={a['applicants.name']}>
              {a['applicants.affinity']} - {a['applicants.name']},{' '}
              {a['applicants.address']}, PESEL: {a['applicants.pesel']}, udział
              w masie spadkowej: {a['applicants.inheritence']}
            </li>
          ))}
        {proposal.participants &&
          proposal.participants.map((p) => (
            <li key={p['participants.name']}>
              {p['participants.affinity']} - {p['participants.name']},{' '}
              {p['participants.address']}, PESEL: {p['participants.pesel']},
              udział w masie spadkowej: {p['participants.inheritence']}
            </li>
          ))}
      </ul>
      <p>
        II. Wnoszę o odebranie na rozprawie od wnioskodawczyni i uczestników
        oświadczenia o przyjęciu spadku wraz z dobrodziejstwem inwentarza /
        przyjęciu spadku / odrzuceniu spadku.
      </p>
      <p>
        III. Wnoszę o dopuszczenie dowodu z: a) aktu zgonu spadkobierczyni na
        fakt daty i miejsca jej śmierci, b) aktu urodzenia wnioskodawczyni i
        uczestników – na fakt pokrewieństwa ze spadkobierczynią w linii prostej,
      </p>
      <p>
        IV. Wnoszę o orzeczenie w zakresie kosztów, iż każdy z uczestników
        ponosi koszty postępowania związane ze swym udziałem w sprawie.
      </p>
      <h1 style={{ textAlign: 'center' }}>Uzasadnienie</h1>
      <p>
        W dniu <i>{proposal['testator.dateOfDeath']}</i> zmarła{' '}
        <i>{proposal['testator.name']}</i>. W chwili śmierci {form("spadkodawczyni była", "spadkodawca był")} {' '}
        <i>{proposal['testator.maritalStatus']}</i> i {form("zamieszkiwała oraz była", "zamieszkiwał oraz był")} {' '}
        tymczasowo {form("zameldowana", "zameldowany")} w <i>{proposal['testator.address']}</i>.{' '}
        {form("Spadkodawczyni miała", "Spadkodawca miał")} troje dzieci tj. wnioskodawczyni i uczestnicy. Nie
        {form("pozostawiła", "pozostawił")} po sobie testamentu. W skład spadku nie wchodzi gospodarstwo
        rolne.
      </p>
      <strong>Dowody:</strong>
      <ul>
        <li>
          <i>odpis skrócony aktu zgonu <i>{proposal['testator.name']}</i>,</i>
        </li>
        <li>
          <i>
            odpis skrócony aktu urodzenia Ewy Kowalskiej, Jana Kowalskiego,
            Janiny Kowalskiej
          </i>
        </li>
      </ul>
      <p style={{ marginLeft: '30px' }}>
        W związku z powyższym wnoszę jak na wstępie.
      </p>
      <h3 style={{ textAlign: 'right' }}>{proposal.lawyer}</h3>
      <strong>Załącznik:</strong>
      <ul>
        <li>
          <i>dwa odpisy wniosku wraz z załącznikami,</i>
        </li>
        <li>
          <i>opłata sądowa w kwocie 100 złotych.</i>
        </li>
      </ul>
    </div>
  )
}