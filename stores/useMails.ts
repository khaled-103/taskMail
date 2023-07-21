import { mailType } from "types/mailType"

export const useMails = defineStore('useMails', {
    state: () => {
        return {
            inboxMails: <mailType | any>[],
            archiveMails: <mailType | any>[],
            selectedMails: <number | any>[],
            currentActiveMail: null as null | mailType
        }
    },
    getters: {
        getInboxMails(): Array<mailType> {
            return this.inboxMails;
        },
        getArchiveMails(): Array<mailType> {
            return this.archiveMails;
        },
        emailSelectedCount(): number {
            return this.selectedMails.length;
        },
        inboxMailsCount(): number {
            return this.inboxMails.length;
        },
        archiveMailsCount(): number {
            return this.archiveMails.length;
        }
    },
    actions: {
        setArchiveMails(mails: mailType[]) {
            this.archiveMails = mails;
        },
        setInboxMails(mails: mailType[]) {
            this.inboxMails = mails;
        },
        setCurrentActiveMail(mail: mailType) {
            this.currentActiveMail = mail;
        },
        clearCurrentActiveMail() {
            this.currentActiveMail = null;
        },
        resetSelected() {
            this.selectedMails = [];
        },
        slectAllMail(source: string) {
            const dummy = <number | any>[];
            if (source == 'inbox')
                this.inboxMails.forEach((mail: mailType) => {
                    dummy.push(mail.id);
                });
            else
                this.archiveMails.forEach((mail: mailType) => {
                    dummy.push(mail.id);
                });
            this.selectedMails = dummy;
        },
        archiveActionMails() {
            const filterArchivedMails = <mailType | any>[];
            this.inboxMails = this.inboxMails.filter((mail: mailType) => {
                if (this.currentActiveMail)
                    return this.currentActiveMail.id != mail.id;
                else if (this.selectedMails.includes(mail.id)) {
                    filterArchivedMails.push(mail);
                }
                return !this.selectedMails.includes(mail.id)
            });
            if (!this.currentActiveMail){
                this.archiveMails.push(...filterArchivedMails);
                this.resetSelected();
            }
            else{
                this.archiveMails.push(this.currentActiveMail);
            }
        },
        markMailsAsRead(source: string) {
            if (source == 'inbox') {
                this.inboxMails.forEach((mail: mailType) => {
                    if (this.currentActiveMail) {
                        if (this.currentActiveMail.id == mail.id)
                            mail.isRead = true;
                    }
                    else if (this.selectedMails.includes(mail.id))
                        mail.isRead = true;
                });
            } else if (source == 'archive') {
                this.archiveMails.forEach((mail: mailType) => {
                    if (this.currentActiveMail) {
                        if (this.currentActiveMail.id == mail.id)
                            mail.isRead = true;
                    }
                    else if (this.selectedMails.includes(mail.id))
                        mail.isRead = true;
                });
            }
        }
    }
})