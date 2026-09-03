import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Dados inválidos." }, { status: 400 });
  }

  const nome = sanitize(body.nome);
  const email = sanitize(body.email);
  const telefone = sanitize(body.telefone);
  const mensagem = sanitize(body.mensagem);

  if (!nome || !email || !telefone || !mensagem) {
    return NextResponse.json(
      { success: false, message: "Preencha todos os campos obrigatórios." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: "Informe um e-mail válido." },
      { status: 400 }
    );
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.error("Variáveis SMTP_USER/SMTP_PASS não configuradas.");
    return NextResponse.json(
      { success: false, message: "Erro interno no envio de mensagem." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user,
      pass,
    },
  });

  const to = process.env.CONTACT_TO || "jvl@jvlimplementos.com";

  try {
    await transporter.sendMail({
      from: `"Site JVL" <${user}>`,
      replyTo: email,
      to,
      subject: `Novo contato pelo site - ${nome}`,
      text: [
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        `Telefone: ${telefone}`,
        "",
        "Mensagem:",
        mensagem,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #95E01D; padding: 16px 24px;">
            <h1 style="margin: 0; font-size: 20px; color: #0f172a;">Novo contato pelo site</h1>
          </div>
          <div style="padding: 24px;">
            <p style="margin: 0 0 12px;"><strong>Nome:</strong> ${escapeHtml(nome)}</p>
            <p style="margin: 0 0 12px;"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
            <p style="margin: 0 0 12px;"><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>
            <p style="margin: 24px 0 8px;"><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap; color: #334155;">${escapeHtml(mensagem)}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { success: false, message: "Não foi possível enviar sua mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
