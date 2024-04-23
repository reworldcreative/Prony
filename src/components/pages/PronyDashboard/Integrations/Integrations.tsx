import React, { FC, useEffect, useState } from "react";
import "./Integrations.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import { CopyField } from "@eisberg-labs/mui-copy-field";

const Integrations: FC = () => {
  const [type, setType] = useState<string>("sso");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [codeLing, setCodeLink] = useState<string>("");

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  function generateRandomPart(length: number, isAlphanumeric: boolean = false): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    const source = isAlphanumeric ? alphanumeric : alphabet;
    let result = "";

    for (let i = 0; i < length; i++) {
      result += source.charAt(Math.floor(Math.random() * source.length));
    }

    return result;
  }

  function generateRandomString(): string {
    const part1 = generateRandomPart(6);

    const part2 = generateRandomPart(6, true);

    const part3 = generateRandomPart(8, true);

    const part4 = generateRandomPart(10, true);

    return `${part1}-${part2}-${part3}-${part4}`;
  }

  useEffect(() => {
    setCodeLink(generateRandomString());
  }, []);

  return (
    <section className="pageContainer-MainSection">
      <Breadcrumbs currentTitle={["SSO"]} currentLink={["/integrations"]} />

      <div className="pageContainer-MainSection__top">
        <h1 className="title integrations__main-title">SSO</h1>
      </div>

      <section className="integrations pageContainer-section">
        <div className="integrations__top">
          <button
            type="button"
            className={`integrations__button ${type === "sso" ? "active" : ""} heading-h6`}
            onClick={() => setType("sso")}
            aria-label={type === "sso" ? "is active" : "is not active"}
          >
            Setup SSO
          </button>

          <button
            type="button"
            className={`integrations__button ${type === "redirect" ? "active" : ""} heading-h6`}
            onClick={() => setType("redirect")}
            aria-label={type === "redirect" ? "is active" : "is not active"}
          >
            Setup SSO redirect
          </button>
        </div>

        <div className="integrations__settings">
          {type === "sso" && (
            <>
              <div className="integrations__col">
                <div className="integrations__field">
                  <div className="integrations__step heading-h6">1</div>

                  <div className="integrations__block">
                    <p className="integrations__caption heading-h6">Your secret single sign on key</p>

                    <div className="integrations__input">
                      <CopyField
                        label=""
                        value={codeLing}
                        copyTooltip={isCopied ? "Copied" : "Copy"}
                        onCopySuccess={handleCopy}
                      />

                      <Button
                        type="primary"
                        buttonType="button"
                        click={() => {
                          setCodeLink(generateRandomString());
                        }}
                      >
                        Generate
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="integrations__field">
                  <div className="integrations__step heading-h6">2</div>

                  <div className="integrations__block">
                    <p className="integrations__caption heading-h6">
                      Setup{" "}
                      <a href="#" className="integrations__link">
                        single sign on
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="integrations__col">
                <div className="integrations__field">
                  <div className="integrations__step heading-h6">3</div>

                  <div className="integrations__block">
                    <p className="integrations__caption heading-h6">Remote logout URL (optional)</p>

                    <p className="integrations__text text">
                      By default, Prony uses its own authentication. If a user is not logged in, we'll ask them to
                      create a Prony account. If you want to disable this, and only use accounts from your app, set your
                      SSO remote login URL here.
                    </p>
                  </div>
                </div>

                <div className="integrations__field">
                  <div className="integrations__step heading-h6">4</div>

                  <div className="integrations__block">
                    <p className="integrations__caption heading-h6">Remote logout URL (optional)</p>

                    <p className="integrations__text text">Redirect SSO users to a specific URL after they log out.</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {type === "redirect" && (
            <>
              <div className="integrations__col">
                <div className="integrations__field">
                  <div className="integrations__step heading-h6">1</div>

                  <div className="integrations__block">
                    <p className="integrations__caption heading-h6">
                      Setup{" "}
                      <a href="#" className="integrations__link">
                        single sign on
                      </a>
                    </p>
                  </div>
                </div>

                <div className="integrations__field">
                  <div className="integrations__step heading-h6">2</div>

                  <div className="integrations__block">
                    <p className="integrations__caption heading-h6">Remote logout URL (optional)</p>

                    <p className="integrations__text text">
                      By default, Prony uses its own authentication. If a user is not logged in, we'll ask them to
                      create a Prony account. If you want to disable this, and only use accounts from your app, set your
                      SSO remote login URL here.
                    </p>
                  </div>
                </div>
              </div>

              <div className="integrations__col">
                <div className="integrations__field">
                  <div className="integrations__step heading-h6">3</div>

                  <div className="integrations__block">
                    <p className="integrations__caption heading-h6">Remote logout URL (optional)</p>

                    <p className="integrations__text text">Redirect SSO users to a specific URL after they log out.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </section>
  );
};

export default Integrations;
