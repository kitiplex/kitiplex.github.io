
import React, { type ReactNode } from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

function WebsiteLink({ to, children }: { to: string; children?: ReactNode }) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--secondary" href={twitterUrl}>
                Twitter
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function CoreTeamRow(): JSX.Element {
  return (
    <div className="row">

      <TeamProfileCardCol
        name="Keith Tan"
        githubUrl="https://github.com/mkeithX"
        twitterUrl="https://twitter.com/mkeithtan">
        <Translate id="team.profile.Keith Tan.body">
          {/* 01001001 01101101 00100000 01100110 01100101 01100101 01101100 01101001 01101110 01100111 00100000 01101100 01110101 01100011 01101011 01111001 */}
          {"Building the web before bedtime."}
        </Translate>
      </TeamProfileCardCol>

      <TeamProfileCardCol
        name="Venice"
        githubUrl="https://github.com/Portiaporkshap"
        twitterUrl="https://twitter.com/">
        <Translate id="team.profile.Venic.body">
          {"Trust me I'm an engineer."}
        </Translate>
      </TeamProfileCardCol>

      <TeamProfileCardCol
        name="Joei"
        githubUrl="https://github.com/JoeiX"
        twitterUrl="https://twitter.com/angajoei">
        <Translate id="team.profile.Joei.body">
          {"Busy upskilling."}
        </Translate>
      </TeamProfileCardCol>



      <TeamProfileCardCol
        name="PriMx"
        githubUrl="https://github.com/PriMaxima"
        twitterUrl="https://twitter.com/">
        <Translate id="team.profile.PriMx.body">
          Teammate is about to update profile. Be right back!
        </Translate>
      </TeamProfileCardCol>
      
      <TeamProfileCardCol
        name="Gina"
        githubUrl="https://github.com/botgina"
        twitterUrl="https://twitter.com/">
        <Translate id="team.profile.Gina.body">
          Teammate is about to update profile. Be right back!
        </Translate>
      </TeamProfileCardCol>

      <TeamProfileCardCol
        name="Kiti"
        githubUrl="https://github.com/kitimi88"
        twitterUrl="https://twitter.com/">
        <Translate id="team.profile.Kiti.body">
          Teammate is about to update profile. Be right back!
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}

export function ContributorsTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Topsy"
        githubUrl="https://github.com/topsykretts8520"
        twitterUrl="https://twitter.com/">
        <Translate id="team.profile.Topsy.body">
          Contributor @Kitiplex · 🔥🔥🔥
        </Translate>
      </TeamProfileCardCol>

      <TeamProfileCardCol
        name="MeganB"
        githubUrl="https://github.com/MeganB143"
        twitterUrl="#">
        <Translate id="team.profile.Megan B.body">
          Contributor @Kitiplex · 🔥🔥🔥
        </Translate>
      </TeamProfileCardCol>

      <TeamProfileCardCol
        name="Johanna Lorenz"
        githubUrl="https://github.com/JLorenz143"
        twitterUrl="https://twitter.com/">
        <Translate id="team.profile.Johanna Lorenz">
          Contributor @Kitiplex · 🔥🔥🔥
        </Translate>
      </TeamProfileCardCol>

      <TeamProfileCardCol
        name="Miriam G"
        githubUrl="https://github.com/MiriamG416"
        twitterUrl="https://twitter.com/">
        <Translate id="team.profile.Miriam G">
          Contributor @Kitiplex · 🔥🔥🔥
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}
